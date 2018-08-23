package com.ims.application.repository.search;

import com.ims.application.domain.Users;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Users entity.
 */
public interface UsersSearchRepository extends ElasticsearchRepository<Users, Long> {
}
