import React from 'react';
import Prometheus from '@/utils/prometheus';

const MetricsPage = ({ avgPing, connectablePeers }) => {
  return (
    <div>
      <p>Average Ping: {avgPing}</p>
      <p>Connectable Peers: {connectablePeers}</p>
    </div>
  );
};

export const getServerSideProps = async () => {
  const avgPing = await Prometheus.getAvgPing();
  const connectablePeers = await Prometheus.getConnectablePeers();

  return {
    props: {
      avgPing,
      connectablePeers,
    },
  };
};

export default MetricsPage;