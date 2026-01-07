package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Ticket;
import com.example.demo.repository.TicketRepository;
@Service
public class TicketServiceImpl implements TicketService {

	   @Autowired
	    private TicketRepository ticketRepository;

	    @Override
	    public Ticket createTicket(Ticket ticket) {
	        return ticketRepository.save(ticket);
	    }

	    @Override
	    public Ticket updateTicket(Long id, Ticket newTicket) {
	        Ticket ticket = ticketRepository.findById(id)
	                .orElseThrow(() -> new RuntimeException("Ticket not found"));

	        ticket.setTitle(newTicket.getTitle());
	        ticket.setDescription(newTicket.getDescription());
	        ticket.setPriority(newTicket.getPriority());
	        ticket.setStatus(newTicket.getStatus());

	        return ticketRepository.save(ticket);
	    }

	    @Override
	    public List<Ticket> getAllTickets() {
	        return ticketRepository.findAll();
	    }

	    @Override
	    public Ticket getTicketById(Long id) {
	        return ticketRepository.findById(id)
	                .orElseThrow(() -> new RuntimeException("Ticket not found"));
	    }

	    @Override
	    public void deleteTicket(Long id) {
	        ticketRepository.deleteById(id);;
	    }
}
