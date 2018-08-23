package com.ims.application.service;

import com.ims.application.service.dto.UsersDTO;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

/**
 * Service Interface for managing Users.
 */
public interface UsersService {

    /**
     * Save a users.
     *
     * @param usersDTO the entity to save
     * @return the persisted entity
     */
    UsersDTO save(UsersDTO usersDTO);

    /**
     * Get all the users.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    Page<UsersDTO> findAll(Pageable pageable);


    /**
     * Get the "id" users.
     *
     * @param id the id of the entity
     * @return the entity
     */
    Optional<UsersDTO> findOne(Long id);

    /**
     * Delete the "id" users.
     *
     * @param id the id of the entity
     */
    void delete(Long id);

    /**
     * Search for the users corresponding to the query.
     *
     * @param query the query of the search
     * 
     * @param pageable the pagination information
     * @return the list of entities
     */
    Page<UsersDTO> search(String query, Pageable pageable);
}
