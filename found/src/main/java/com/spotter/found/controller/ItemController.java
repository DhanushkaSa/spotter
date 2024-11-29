package com.spotter.found.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.spotter.found.dto.ItemDto;
import com.spotter.found.entity.Item;
import com.spotter.found.entity.User;
import com.spotter.found.service.ItemService;
import com.spotter.found.service.UserService;

@RestController
@CrossOrigin(origins = "*")
public class ItemController {

    @Autowired
    private ItemService itemService;

    @Autowired
    private UserService userService;

    @PostMapping("/item")
    public ResponseEntity<?> createItem(@RequestBody ItemDto itemDto) {
        Item newItem = new Item();
        newItem.setPhoto(itemDto.getPhoto());
        newItem.setLocation(itemDto.getLocation());
        newItem.setDate(itemDto.getDate());
        newItem.setItemname(itemDto.getItemname());
        newItem.setDescription(itemDto.getDescription());

        User user = userService.getUser(itemDto.getUid());
        newItem.setUser(user);

        return ResponseEntity.status(201).body(itemService.createItem(newItem));
    }

    @GetMapping("/item")
    public ResponseEntity<List<Item>> getAllItem(){
        return ResponseEntity.status(200).body(itemService.getAllItems());
    }

    @GetMapping("/item/{id}")
    public ResponseEntity<?> getItem(@PathVariable Long id){
         Item item=itemService.getItem(id);
         if(item==null){
            return ResponseEntity.status(404).body("Item not found");
         }else{
            return ResponseEntity.status(200).body(item);
         }
    }

    @PutMapping("/item/{id}")
    public ResponseEntity<?> updateItem(@PathVariable Long id,@RequestBody ItemDto itemDto){
        Item newItem = new Item();
        newItem.setPhoto(itemDto.getPhoto());
        newItem.setLocation(itemDto.getLocation());
        newItem.setDate(itemDto.getDate());
        newItem.setDescription(itemDto.getDescription());
        newItem.setItemname(itemDto.getItemname());

        User user = userService.getUser(itemDto.getUid());
        newItem.setUser(user);

        return ResponseEntity.status(200).body(itemService.updateItem(id, newItem));
    }

    @DeleteMapping("/item/{id}")
    public void deleteItem(@PathVariable Long id){
        itemService.deleteItem(id);
    }
}
