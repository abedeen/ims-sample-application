package com.ims.application.service.dto;

import java.io.Serializable;
import java.util.Objects;

/**
 * A DTO for the UserGroup entity.
 */
public class UserGroupDTO implements Serializable {

    private Long id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        UserGroupDTO userGroupDTO = (UserGroupDTO) o;
        if (userGroupDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), userGroupDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "UserGroupDTO{" +
            "id=" + getId() +
            "}";
    }
}
