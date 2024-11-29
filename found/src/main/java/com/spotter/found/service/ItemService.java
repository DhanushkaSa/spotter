package com.spotter.found.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.spotter.found.entity.Item;

@Service
public interface ItemService {

    public Item createItem(Item item);

    public List<Item> getAllItems();

    public Item getItem(Long itemId);

    public Item updateItem(Long itemId, Item item);

    public void deleteItem(Long itemId);

}
