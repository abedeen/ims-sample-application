package com.ims.application.service.mapper;

import com.ims.application.domain.*;
import com.ims.application.service.dto.StockDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Stock and its DTO StockDTO.
 */
@Mapper(componentModel = "spring", uses = {UsersMapper.class, UserGroupMapper.class})
public interface StockMapper extends EntityMapper<StockDTO, Stock> {

    @Mapping(source = "users.id", target = "usersId")
    @Mapping(source = "userGroup.id", target = "userGroupId")
    StockDTO toDto(Stock stock);

    @Mapping(source = "usersId", target = "users")
    @Mapping(source = "userGroupId", target = "userGroup")
    Stock toEntity(StockDTO stockDTO);

    default Stock fromId(Long id) {
        if (id == null) {
            return null;
        }
        Stock stock = new Stock();
        stock.setId(id);
        return stock;
    }
}
