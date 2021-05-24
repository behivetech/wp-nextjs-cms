import dynamic from 'next/dynamic';

export const Text = dynamic(() => import(`./Text`))
