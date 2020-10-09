import * as React from 'react';

import { Text, TextProps } from './Themed';

export function MonoText(props: TextProps) : React.FunctionComponent {
  return <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />;
}
