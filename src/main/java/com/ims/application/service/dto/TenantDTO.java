package com.ims.application.service.dto;

import java.io.Serializable;
import java.util.Objects;

/**
 * A DTO for the Tenant entity.
 */
public class TenantDTO implements Serializable {

    private Long id;

    private String company;

    private String contactEmail;

    private String contactName;

    private String contactPhone;

    private String contactTitle;

    private String department;

    private String email;

    private String logo;

    private String name;

    private String password;

    private String title;

    private String userName;

    private String uuid;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getContactEmail() {
        return contactEmail;
    }

    public void setContactEmail(String contactEmail) {
        this.contactEmail = contactEmail;
    }

    public String getContactName() {
        return contactName;
    }

    public void setContactName(String contactName) {
        this.contactName = contactName;
    }

    public String getContactPhone() {
        return contactPhone;
    }

    public void setContactPhone(String contactPhone) {
        this.contactPhone = contactPhone;
    }

    public String getContactTitle() {
        return contactTitle;
    }

    public void setContactTitle(String contactTitle) {
        this.contactTitle = contactTitle;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getLogo() {
        return logo;
    }

    public void setLogo(String logo) {
        this.logo = logo;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUuid() {
        return uuid;
    }

    public void setUuid(String uuid) {
        this.uuid = uuid;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        TenantDTO tenantDTO = (TenantDTO) o;
        if (tenantDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), tenantDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "TenantDTO{" +
            "id=" + getId() +
            ", company='" + getCompany() + "'" +
            ", contactEmail='" + getContactEmail() + "'" +
            ", contactName='" + getContactName() + "'" +
            ", contactPhone='" + getContactPhone() + "'" +
            ", contactTitle='" + getContactTitle() + "'" +
            ", department='" + getDepartment() + "'" +
            ", email='" + getEmail() + "'" +
            ", logo='" + getLogo() + "'" +
            ", name='" + getName() + "'" +
            ", password='" + getPassword() + "'" +
            ", title='" + getTitle() + "'" +
            ", userName='" + getUserName() + "'" +
            ", uuid='" + getUuid() + "'" +
            "}";
    }
}
