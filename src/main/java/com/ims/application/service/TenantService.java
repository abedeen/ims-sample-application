package com.ims.application.service;

import com.ims.application.service.dto.TenantDTO;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

/**
 * Service Interface for managing Tenant.
 */
public interface TenantService {

    /**
     * Save a tenant.
     *
     * @param tenantDTO the entity to save
     * @return the persisted entity
     */
    TenantDTO save(TenantDTO tenantDTO);

    /**
     * Get all the tenants.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    Page<TenantDTO> findAll(Pageable pageable);


    /**
     * Get the "id" tenant.
     *
     * @param id the id of the entity
     * @return the entity
     */
    Optional<TenantDTO> findOne(Long id);

    /**
     * Delete the "id" tenant.
     *
     * @param id the id of the entity
     */
    void delete(Long id);

    /**
     * Search for the tenant corresponding to the query.
     *
     * @param query the query of the search
     * 
     * @param pageable the pagination information
     * @return the list of entities
     */
    Page<TenantDTO> search(String query, Pageable pageable);
}
