import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './ChatBubblesMain.module.css';

interface Props {
  className?: string;
  classes?: {
    _181?: string;
    _1351?: string;
    _711?: string;
    root?: string;
  };
}
/* @figmaId 36:119 */
export const ChatBubblesMain: FC<Props> = memo(function ChatBubblesMain(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.chatBubble}>
        <div className={classes.rectangle3}></div>
        <div className={classes.wowThankYouForThis}>Wow thank you for this!</div>
        <div className={classes.l_Kelly}>L_Kelly</div>
        <div className={`${props.classes?._181 || ''} ${classes._181}`}></div>
      </div>
      <div className={classes.chatBubble2}>
        <div className={classes.rectangle32}></div>
        <div className={`${props.classes?._1351 || ''} ${classes._1351}`}></div>
        <div className={classes.iLoveTheNecklaceCanYouTellMeTh}>
          I love the necklace, can you tell me the length of the chain?
        </div>
        <div className={classes.relmi}>Relmi</div>
      </div>
      <div className={classes.chatBubble3}>
        <div className={classes.rectangle33}></div>
        <div className={`${props.classes?._711 || ''} ${classes._711}`}></div>
        <div className={classes.whatSTheMainIngredientInTheSha}>What’s the main ingredient in the shampoo?</div>
        <div className={classes.roger_S}>Roger_S</div>
      </div>
    </div>
  );
});
