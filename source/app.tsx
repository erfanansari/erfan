import React from 'react';
import {Text} from 'ink';

type Props = {
	name: string | undefined;
};

export default function App({name = 'Erfan'}: Props) {
	return <Text>Greetings from {name}!</Text>;
}
