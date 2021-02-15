import React from 'react';
import { Link } from 'react-router-dom';
import { routePatterns } from 'router/routePaths';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import s from './TicketsList.module.scss';

const TicketsList = ({ tickets, onRemoveTicket }) => (
  <ul className={s.ticketsContainer}>
    {tickets.map(({ _id, title, assignee }) => (
      <li className={s.ticket}>
        <div className={s.contentWrapper}>
          <Link key={_id} to={routePatterns.payment.stringify({ id: _id })}>
            <h4 className={s.ticketName}>{title}</h4>
            <span className={s.assignee}>{assignee}</span>
          </Link>
        </div>
        <IconButton
          aria-label="delete"
          type="submit"
          color="secondary"
          className={s.removeBtn}
          onClick={() => onRemoveTicket(_id)}
        >
          <DeleteIcon />
        </IconButton>
      </li>
    ))}
  </ul>
);

export default TicketsList;
