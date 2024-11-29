package com.spotter.found.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ItemDto {

    private String photo;
    private String location;
    private String date;
    private String itemname;
    private String description;
    private Long uid;

}
