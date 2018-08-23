package com.ims.application.repository.search;

import com.ims.application.domain.UserGroup;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the UserGroup entity.
 */
public interface UserGroupSearchRepository extends ElasticsearchRepository<UserGroup, Long> {
}
