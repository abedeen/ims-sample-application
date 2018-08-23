package com.ims.application.service.impl;

import com.ims.application.service.UsersService;
import com.ims.application.domain.Users;
import com.ims.application.repository.UsersRepository;
import com.ims.application.repository.search.UsersSearchRepository;
import com.ims.application.service.dto.UsersDTO;
import com.ims.application.service.mapper.UsersMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.util.Optional;

import static org.elasticsearch.index.query.QueryBuilders.*;

/**
 * Service Implementation for managing Users.
 */
@Service
@Transactional
public class UsersServiceImpl implements UsersService {

    private final Logger log = LoggerFactory.getLogger(UsersServiceImpl.class);

    private final UsersRepository usersRepository;

    private final UsersMapper usersMapper;

    private final UsersSearchRepository usersSearchRepository;

    public UsersServiceImpl(UsersRepository usersRepository, UsersMapper usersMapper, UsersSearchRepository usersSearchRepository) {
        this.usersRepository = usersRepository;
        this.usersMapper = usersMapper;
        this.usersSearchRepository = usersSearchRepository;
    }

    /**
     * Save a users.
     *
     * @param usersDTO the entity to save
     * @return the persisted entity
     */
    @Override
    public UsersDTO save(UsersDTO usersDTO) {
        log.debug("Request to save Users : {}", usersDTO);
        Users users = usersMapper.toEntity(usersDTO);
        users = usersRepository.save(users);
        UsersDTO result = usersMapper.toDto(users);
        usersSearchRepository.save(users);
        return result;
    }

    /**
     * Get all the users.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<UsersDTO> findAll(Pageable pageable) {
        log.debug("Request to get all Users");
        return usersRepository.findAll(pageable)
            .map(usersMapper::toDto);
    }


    /**
     * Get one users by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<UsersDTO> findOne(Long id) {
        log.debug("Request to get Users : {}", id);
        return usersRepository.findById(id)
            .map(usersMapper::toDto);
    }

    /**
     * Delete the users by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Users : {}", id);
        usersRepository.deleteById(id);
        usersSearchRepository.deleteById(id);
    }

    /**
     * Search for the users corresponding to the query.
     *
     * @param query the query of the search
     * @param pageable the pagination information
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<UsersDTO> search(String query, Pageable pageable) {
        log.debug("Request to search for a page of Users for query {}", query);
        return usersSearchRepository.search(queryStringQuery(query), pageable)
            .map(usersMapper::toDto);
    }
}
