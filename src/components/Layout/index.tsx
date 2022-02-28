import React from 'react';
import { ChannelInfo } from '../ChannelInfo';
import { ServerList } from '../ServeList';
import { ServerName } from '../ServerName';
import { ChannelList}from '../ChannelList'
import { Grid } from './style';
import { UserInfo } from '../UserInfo';
import { UserList } from '../UserList';
import { ChannelData } from '../ChannelData';


export const Layout: React.FC = () => {
  return (
    <Grid>
      <ServerList />
      <ServerName/>
      <ChannelInfo/>
      <ChannelList/>
      <UserInfo/>
      <ChannelData/>
      <UserList/>
    </Grid>
  );
};