package com.spotter.found.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spotter.found.entity.Item;
import com.spotter.found.repository.ItemRepository;

@Service
public class ItemServiceImpl implements ItemService {

    @Autowired
    private ItemRepository itemRepository;

    @Override
    public Item createItem(Item item) {
        return itemRepository.save(item);
    }

    @Override
    public List<Item> getAllItems() {
        return itemRepository.findAll();
    }

    @Override
    public Item getItem(Long itemId) {
        return itemRepository.findById(itemId).orElse(null);
    }

    @Override
    public Item updateItem(Long itemId, Item item) {
        Item updateItem = itemRepository.findById(itemId).orElse(null);
        if (updateItem == null) {
            return null;
        } else {
            updateItem.setDescription(item.getDescription());
            updateItem.setLocation(item.getLocation());
            updateItem.setDate(item.getDate());
            updateItem.setPhoto(item.getPhoto());
            updateItem.setItemname(item.getItemname());
            updateItem.setUser(item.getUser());

            return itemRepository.save(updateItem);
        }
    }

    @Override
    public void deleteItem(Long itemId) {
        itemRepository.deleteById(itemId);
    }

}
