package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.Ticket;

public interface TicketService {

    Ticket createTicket(Ticket ticket);

    Ticket updateTicket(Long id, Ticket ticket);

    List<Ticket> getAllTickets();

    Ticket getTicketById(Long id);

    void deleteTicket(Long id);
}
