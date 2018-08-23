package com.ims.application.service.mapper;

import com.ims.application.domain.*;
import com.ims.application.service.dto.UserGroupDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity UserGroup and its DTO UserGroupDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface UserGroupMapper extends EntityMapper<UserGroupDTO, UserGroup> {



    default UserGroup fromId(Long id) {
        if (id == null) {
            return null;
        }
        UserGroup userGroup = new UserGroup();
        userGroup.setId(id);
        return userGroup;
    }
}
