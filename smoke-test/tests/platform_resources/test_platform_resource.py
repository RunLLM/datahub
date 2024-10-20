import logging
import random
import string
from typing import List

import pytest
from datahub.api.entities.platformresource.platform_resource import (
    PlatformResource,
    PlatformResourceKey,
)

from tests.utils import wait_for_healthcheck_util, wait_for_writes_to_sync

logger = logging.getLogger(__name__)


@pytest.fixture(scope="module")
def wait_for_healthchecks(auth_session):
    wait_for_healthcheck_util(auth_session)
    yield


def generate_random_id(length=8):
    return "".join(random.choices(string.ascii_lowercase + string.digits, k=length))


@pytest.fixture
def test_id():
    return f"test_{generate_random_id()}"


@pytest.fixture(scope="function", autouse=True)
def cleanup_resources(graph_client):
    created_resources: List[PlatformResource] = []
    yield created_resources

    # Delete all generated platform resources after each test
    for resource in created_resources:
        try:
            resource.delete(graph_client)
        except Exception as e:
            logger.warning(f"Failed to delete resource: {e}")

    # Additional cleanup for any resources that might have been missed
    for resource in PlatformResource.search_by_key(graph_client, "test_"):
        try:
            resource.delete(graph_client)
        except Exception as e:
            logger.warning(f"Failed to delete resource during final cleanup: {e}")


def test_platform_resource_read_write(graph_client, test_id, cleanup_resources):
    key = PlatformResourceKey(
        platform=f"test_platform_{test_id}",
        resource_type=f"test_resource_type_{test_id}",
        primary_key=f"test_primary_key_{test_id}",
    )
    platform_resource = PlatformResource.create(
        key=key,
        secondary_keys=[f"test_secondary_key_{test_id}"],
        value={"test_key": f"test_value_{test_id}"},
    )
    platform_resource.to_datahub(graph_client)
    cleanup_resources.append(platform_resource)

    wait_for_writes_to_sync()

    read_platform_resource = PlatformResource.from_datahub(graph_client, key)
    assert read_platform_resource == platform_resource


def test_platform_resource_search(graph_client, test_id, cleanup_resources):
    key = PlatformResourceKey(
        platform=f"test_platform_{test_id}",
        resource_type=f"test_resource_type_{test_id}",
        primary_key=f"test_primary_key_{test_id}",
    )
    platform_resource = PlatformResource.create(
        key=key,
        secondary_keys=[f"test_secondary_key_{test_id}"],
        value={"test_key": f"test_value_{test_id}"},
    )
    platform_resource.to_datahub(graph_client)
    cleanup_resources.append(platform_resource)

    wait_for_writes_to_sync()

    search_results = [
        r for r in PlatformResource.search_by_key(graph_client, key.primary_key)
    ]
    assert len(search_results) == 1
    assert search_results[0] == platform_resource

    search_results = [
        r
        for r in PlatformResource.search_by_key(
            graph_client, f"test_secondary_key_{test_id}", primary=False
        )
    ]
    assert len(search_results) == 1
    assert search_results[0] == platform_resource


def test_platform_resource_non_existent(graph_client, test_id):
    key = PlatformResourceKey(
        platform=f"test_platform_{test_id}",
        resource_type=f"test_resource_type_{test_id}",
        primary_key=f"test_primary_key_{test_id}",
    )
    platform_resource = PlatformResource.from_datahub(
        key=key,
        graph_client=graph_client,
    )
    assert platform_resource is None
