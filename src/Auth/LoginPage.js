import React from 'react';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Footer from 'grommet/components/Footer';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import Heading from 'grommet/components/Heading';
import TextInput from 'grommet/components/TextInput';

export default function LoginPage() {
  return (
    <Box align="center">
      <Form pad="medium" fill>
        <Heading align="center" strong>Kizuna</Heading>
        <Button
          label="Facebook"
          fill
          onClick={() => {}}
          primary={false}
          type="button"
        />
        <Heading align="center" tag="h4">or</Heading>
        <FormField label="NickName">
          <TextInput />
        </FormField>
        <Footer pad={{ vertical: 'medium' }}>
          <Button
            label="Sign In"
            fill
            onClick={() => {}}
            primary
            type="submit"
          />
        </Footer>
      </Form>
    </Box>
  );
}
