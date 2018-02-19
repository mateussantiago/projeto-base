package br.ufrn.base.controller.model;

import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(schema="schema", name="base")
public class Base extends AbstractPersistable<Long> {





}