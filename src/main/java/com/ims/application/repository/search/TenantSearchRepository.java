package com.ims.application.repository.search;

import com.ims.application.domain.Tenant;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Tenant entity.
 */
public interface TenantSearchRepository extends ElasticsearchRepository<Tenant, Long> {
}
