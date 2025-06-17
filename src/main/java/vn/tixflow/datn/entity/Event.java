package vn.tixflow.datn.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.time.OffsetDateTime;

@Data
@Entity
@Table(name = "events")
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Step 1 - Basic Info
    private String eventName;
    private String eventType;
    private String locationType;
    private String venueName;
    private String province;
    private String district;

    @Column(columnDefinition = "TEXT")
    private String description;

    private String organizerName;
    private String organizerInfo;
    private String logoUrl;
    private String bannerUrl;

    // Step 2 - Sessions stored as JSON
    @JdbcTypeCode(SqlTypes.JSON)
    @Column(columnDefinition = "jsonb")
    private String sessions;

    // Step 3 - Customization
    private String customUrl;
    private String privacy;

    @Column(columnDefinition = "TEXT")
    private String confirmationMessage;

    private Boolean enableQuestions;

    // Step 4 - Payment Info
    private String bankAccountName;
    private String bankAccountNumber;
    private String bankName;

    // Management Info
    @Enumerated(EnumType.STRING)
    @Column(columnDefinition = "varchar(20)")
    private EventStatus status = EventStatus.draft;

    private OffsetDateTime createdAt = OffsetDateTime.now();
    private OffsetDateTime updatedAt = OffsetDateTime.now();

    public enum EventStatus {
        draft, published, archived
    }
}
