package com.ims.application.service.mapper;

import com.ims.application.domain.*;
import com.ims.application.service.dto.UsersDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Users and its DTO UsersDTO.
 */
@Mapper(componentModel = "spring", uses = {UserGroupMapper.class, TenantMapper.class})
public interface UsersMapper extends EntityMapper<UsersDTO, Users> {

    @Mapping(source = "userGroup.id", target = "userGroupId")
    @Mapping(source = "tenant.id", target = "tenantId")
    UsersDTO toDto(Users users);

    @Mapping(source = "userGroupId", target = "userGroup")
    @Mapping(source = "tenantId", target = "tenant")
    Users toEntity(UsersDTO usersDTO);

    default Users fromId(Long id) {
        if (id == null) {
            return null;
        }
        Users users = new Users();
        users.setId(id);
        return users;
    }
}
