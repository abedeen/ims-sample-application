package com.ims.application.repository.search;

import com.ims.application.domain.Stock;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Stock entity.
 */
public interface StockSearchRepository extends ElasticsearchRepository<Stock, Long> {
}
