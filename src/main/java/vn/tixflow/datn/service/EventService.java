package vn.tixflow.datn.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;
import vn.tixflow.datn.dto.EventUpdateRequest;
import vn.tixflow.datn.entity.Event;
import vn.tixflow.datn.repository.EventRepository;

import java.time.OffsetDateTime;

@Service
public class EventService {

    private final EventRepository eventRepository;
    private final ObjectMapper objectMapper;

    public EventService(EventRepository eventRepository, ObjectMapper objectMapper) {
        this.eventRepository = eventRepository;
        this.objectMapper = objectMapper;
    }

    public Event createDraftEvent() {
        Event newEvent = new Event();
        return eventRepository.save(newEvent);
    }

    public Event getEventById(Long id) {
        return eventRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Event not found with id: " + id));
    }

    public Event updateEvent(Long id, EventUpdateRequest request) throws JsonProcessingException {
        Event event = getEventById(id);

        event.setEventName(request.getEventName());
        event.setEventType(request.getEventType());
        event.setLocationType(request.getLocationType());
        event.setVenueName(request.getVenueName());
        event.setProvince(request.getProvince());
        event.setDistrict(request.getDistrict());
        event.setDescription(request.getDescription());
        event.setOrganizerName(request.getOrganizerName());
        event.setOrganizerInfo(request.getOrganizerInfo());

        if (request.getSessions() != null) {
            event.setSessions(objectMapper.writeValueAsString(request.getSessions()));
        }

        event.setCustomUrl(request.getCustomUrl());
        event.setPrivacy(request.getPrivacy());
        event.setConfirmationMessage(request.getConfirmationMessage());
        event.setEnableQuestions(request.getEnableQuestions());

        event.setUpdatedAt(OffsetDateTime.now());

        return eventRepository.save(event);
    }
}
