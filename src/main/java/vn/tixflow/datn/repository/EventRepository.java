package vn.tixflow.datn.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.tixflow.datn.entity.Event;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {
}
