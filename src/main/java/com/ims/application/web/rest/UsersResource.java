package com.ims.application.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.ims.application.service.UsersService;
import com.ims.application.web.rest.errors.BadRequestAlertException;
import com.ims.application.web.rest.util.HeaderUtil;
import com.ims.application.web.rest.util.PaginationUtil;
import com.ims.application.service.dto.UsersDTO;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;
import java.util.stream.StreamSupport;

import static org.elasticsearch.index.query.QueryBuilders.*;

/**
 * REST controller for managing Users.
 */
@RestController
@RequestMapping("/api")
public class UsersResource {

    private final Logger log = LoggerFactory.getLogger(UsersResource.class);

    private static final String ENTITY_NAME = "users";

    private final UsersService usersService;

    public UsersResource(UsersService usersService) {
        this.usersService = usersService;
    }

    /**
     * POST  /users : Create a new users.
     *
     * @param usersDTO the usersDTO to create
     * @return the ResponseEntity with status 201 (Created) and with body the new usersDTO, or with status 400 (Bad Request) if the users has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/users")
    @Timed
    public ResponseEntity<UsersDTO> createUsers(@RequestBody UsersDTO usersDTO) throws URISyntaxException {
        log.debug("REST request to save Users : {}", usersDTO);
        if (usersDTO.getId() != null) {
            throw new BadRequestAlertException("A new users cannot already have an ID", ENTITY_NAME, "idexists");
        }
        UsersDTO result = usersService.save(usersDTO);
        return ResponseEntity.created(new URI("/api/users/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /users : Updates an existing users.
     *
     * @param usersDTO the usersDTO to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated usersDTO,
     * or with status 400 (Bad Request) if the usersDTO is not valid,
     * or with status 500 (Internal Server Error) if the usersDTO couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/users")
    @Timed
    public ResponseEntity<UsersDTO> updateUsers(@RequestBody UsersDTO usersDTO) throws URISyntaxException {
        log.debug("REST request to update Users : {}", usersDTO);
        if (usersDTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        UsersDTO result = usersService.save(usersDTO);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, usersDTO.getId().toString()))
            .body(result);
    }

    /**
     * GET  /users : get all the users.
     *
     * @param pageable the pagination information
     * @return the ResponseEntity with status 200 (OK) and the list of users in body
     */
    @GetMapping("/users")
    @Timed
    public ResponseEntity<List<UsersDTO>> getAllUsers(Pageable pageable) {
        log.debug("REST request to get a page of Users");
        Page<UsersDTO> page = usersService.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/users");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    /**
     * GET  /users/:id : get the "id" users.
     *
     * @param id the id of the usersDTO to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the usersDTO, or with status 404 (Not Found)
     */
    @GetMapping("/users/{id}")
    @Timed
    public ResponseEntity<UsersDTO> getUsers(@PathVariable Long id) {
        log.debug("REST request to get Users : {}", id);
        Optional<UsersDTO> usersDTO = usersService.findOne(id);
        return ResponseUtil.wrapOrNotFound(usersDTO);
    }

    /**
     * DELETE  /users/:id : delete the "id" users.
     *
     * @param id the id of the usersDTO to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/users/{id}")
    @Timed
    public ResponseEntity<Void> deleteUsers(@PathVariable Long id) {
        log.debug("REST request to delete Users : {}", id);
        usersService.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }

    /**
     * SEARCH  /_search/users?query=:query : search for the users corresponding
     * to the query.
     *
     * @param query the query of the users search
     * @param pageable the pagination information
     * @return the result of the search
     */
    @GetMapping("/_search/users")
    @Timed
    public ResponseEntity<List<UsersDTO>> searchUsers(@RequestParam String query, Pageable pageable) {
        log.debug("REST request to search for a page of Users for query {}", query);
        Page<UsersDTO> page = usersService.search(query, pageable);
        HttpHeaders headers = PaginationUtil.generateSearchPaginationHttpHeaders(query, page, "/api/_search/users");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

}
