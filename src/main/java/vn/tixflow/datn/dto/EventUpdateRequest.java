package vn.tixflow.datn.dto;

import com.fasterxml.jackson.databind.JsonNode;
import lombok.Data;

@Data
public class EventUpdateRequest {
    // Step 1
    private String eventName;
    private String eventType;
    private String locationType;
    private String venueName;
    private String province;
    private String district;
    private String description;
    private String organizerName;
    private String organizerInfo;

    // Step 2
    private JsonNode sessions;

    // Step 3
    private String customUrl;
    private String privacy;
    private String confirmationMessage;
    private Boolean enableQuestions;
}
