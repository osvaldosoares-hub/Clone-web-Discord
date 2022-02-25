import React from 'react';
import { ChannelInfo } from '../ChannelInfo';
import { ServerList } from '../ServeList';
import { ServerName } from '../ServerName';

import { Grid } from './style';



export const Layout: React.FC = () => {
  return (
    <Grid>
      <ServerList />
      <ServerName/>
      <ChannelInfo/>
    </Grid>
  );
};