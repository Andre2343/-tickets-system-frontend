import React from 'react';
import useGetTickets from 'hooks/useGetTickets';
import useAddTicket from 'hooks/useAddTicket';
import useRemoveTicket from 'hooks/useRemoveTicket';
import TicketForm from 'components/ticket/TicketForm';
import Title from 'components/common/Title';
import TicketsList from 'components/ticket/TicketsList/TicketsList';
import AddIcon from '@material-ui/icons/Add';
import s from './Home.module.scss';

const btnLabel = (
  <div style={{ display: 'flex' }}>
    Add ticket <AddIcon />
  </div>
);

const initialValues = {
  title: '',
  assignee: '',
};

export default () => {
  const [tickets, loading] = useGetTickets();
  const onSubmit = useAddTicket();
  const onRemoveTicket = useRemoveTicket();

  if (loading) return <div>Loading...</div>;

  return (
    <div className={s.container}>
      <Title>Home</Title>
      <TicketForm btnLabel={btnLabel} onSubmit={onSubmit} initialValues={initialValues} />
      <TicketsList tickets={tickets} onRemoveTicket={onRemoveTicket} />
    </div>
  );
};
