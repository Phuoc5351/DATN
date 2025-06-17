package vn.tixflow.datn.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.tixflow.datn.dto.EventUpdateRequest;
import vn.tixflow.datn.entity.Event;
import vn.tixflow.datn.service.EventService;

import java.util.Map;

@RestController
@RequestMapping("/api/events")
public class EventController {

    private final EventService eventService;

    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @PostMapping
    public ResponseEntity<?> createDraftEvent() {
        Event newEvent = eventService.createDraftEvent();
        return ResponseEntity.status(201).body(Map.of("eventId", newEvent.getId()));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Event> getEventById(@PathVariable Long id) {
        Event event = eventService.getEventById(id);
        return ResponseEntity.ok(event);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Event> updateEvent(@PathVariable Long id,
                                             @RequestBody EventUpdateRequest request) throws JsonProcessingException {
        Event updatedEvent = eventService.updateEvent(id, request);
        return ResponseEntity.ok(updatedEvent);
    }
}
