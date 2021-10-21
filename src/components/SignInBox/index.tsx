import React from 'react';
import { Button } from '../Button';
import { useAuth } from '../../hooks/auth';

import {
  View
} from 'react-native';

import { styles } from './styles';
import { COLORS } from '../../theme';

export function SignInBox() {
  const { signIn, isSigningIn } = useAuth();


  return (
    <View style={styles.container}>
      <Button
        tittle="Entrar com Github"
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
        icon="github"
        onPress={signIn}
        isLoading={isSigningIn}
      />
    </View>
  );
}