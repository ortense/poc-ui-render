import { useNubeSDK } from '@internal/use-nube-sdk';
import { DynamicRender } from '../DynamicRender';
import { useEffect } from 'react';
import { Row } from '../Row';
import { Col } from '../Col';
import { Txt } from '../Txt';

export function BeforeLineItems() {
  const { state } = useNubeSDK('checkout:render_element');
  return <DynamicRender component={state.ui.before_line_items} />;
}

export function AfterLineItems() {
  const { state } = useNubeSDK('checkout:render_element');
  return <DynamicRender component={state.ui.afer_line_items} />;
}

export function AfterMainContent() {
  const { state } = useNubeSDK('checkout:render_element');
  return <DynamicRender component={state.ui.after_main_content} />;
}

export function BeforeMainContent() {
  const { state } = useNubeSDK('checkout:render_element');
  return <DynamicRender component={state.ui.before_main_content} />;
}

export function FirstAtMainContent() {
  const { state } = useNubeSDK('checkout:render_element');
  return <DynamicRender component={state.ui.fist_at_main_content} />;
}

export function LastAtMainContent() {
  const { state } = useNubeSDK('checkout:render_element');
  return <DynamicRender component={state.ui.last_at_main_content} />;
}

export function Checkout() {
  const { send } = useNubeSDK()
  useEffect(() => {
    send('checkout:step_ready')
  }, [])

  return (
    <Col width="100%" gap="1rem" justifyContent="space-between">
      <Row width="100%" background="#ccc" justifyContent="center" padding="1rem">
        <Txt level={1} modifiers={['bold', 'uppercase']}>{"header"}</Txt>
      </Row>
      <AfterMainContent />
      <Row gap="1rem" width="90%" margin="auto" background="#ddd">
        <Col width="60%" height="500px" padding="1rem" alignItems="center" justifyContent='space-between'>
          <FirstAtMainContent />
          <Txt level={1} modifiers={['bold', 'uppercase']}>{"main content"}</Txt>
          <LastAtMainContent />
        </Col>
        <Col width="40%" background="#ccc" alignItems="center" padding="1rem">
          <BeforeLineItems />
          <Txt level={1} modifiers={['bold', 'uppercase']}>{"line items"}</Txt>
          <AfterLineItems />
        </Col>
      </Row>
      <BeforeMainContent />
      <Row width="100%" background="#ccc" justifyContent="center" padding="1rem">
        <Txt level={1} modifiers={['bold', 'uppercase']}>{"footer"}</Txt>
      </Row>
    </Col>
  )
}