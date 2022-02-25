import React from 'react';
import { ChannelInfo } from '../ChannelInfo';
import { ServerList } from '../ServeList';
import { ServerName } from '../ServerName';
import { ChannelList}from '../ChannelList'
import { Grid } from './style';
import { UserInfo } from '../UserInfo';



export const Layout: React.FC = () => {
  return (
    <Grid>
      <ServerList />
      <ServerName/>
      <ChannelInfo/>
      <ChannelList/>
      <UserInfo/>
    </Grid>
  );
};