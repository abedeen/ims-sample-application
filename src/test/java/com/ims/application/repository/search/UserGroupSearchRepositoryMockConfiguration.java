package com.ims.application.repository.search;

import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Configuration;

/**
 * Configure a Mock version of UserGroupSearchRepository to test the
 * application without starting Elasticsearch.
 */
@Configuration
public class UserGroupSearchRepositoryMockConfiguration {

    @MockBean
    private UserGroupSearchRepository mockUserGroupSearchRepository;

}
