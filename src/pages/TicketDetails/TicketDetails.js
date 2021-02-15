import Title from 'components/common/Title';
import TicketForm from 'components/ticket/TicketForm';
import useGetTicket from 'hooks/useGetTicket';
import useUpdateTicket from 'hooks/useUpdateTicket';
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import routePaths from 'router/routePaths';
import UpdateIcon from '@material-ui/icons/Update';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import s from './TicketDetails.module.scss';

const btnLabel = (
  <div style={{ display: 'flex' }}>
    Update ticket <UpdateIcon />
  </div>
);

const TicketDetails = () => {
  const { id: ticketId } = useParams();
  const [ticket, loading] = useGetTicket(ticketId);
  const onSubmit = useUpdateTicket(ticketId);

  if (loading) return <h4>Loading...</h4>;

  const { title, assignee } = ticket;

  return (
    <div className={s.container}>
      <Title className={s.title}>Ticket details</Title>
      <Link to={routePaths.home}>
        <h2 className={s.backToHome}>
          <KeyboardArrowLeftIcon /> Back to home
        </h2>
      </Link>
      <TicketForm btnLabel={btnLabel} initialValues={{ title, assignee }} onSubmit={onSubmit} />
    </div>
  );
};

export default TicketDetails;
