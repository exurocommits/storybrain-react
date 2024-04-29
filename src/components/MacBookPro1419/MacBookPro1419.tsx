import { memo } from "react";
import type { FC } from "react";

import resets from "../_resets.module.css";
import { BlobBigIcon } from "./BlobBigIcon";
import { BlobBlue1Icon } from "./BlobBlue1Icon";
import { BlobBlue2Icon } from "./BlobBlue2Icon";
import { BlobYellow1Icon } from "./BlobYellow1Icon";
import { BlobYellow2Icon } from "./BlobYellow2Icon";
import { BlobYellowSmall1Icon } from "./BlobYellowSmall1Icon";
import { ChatBubblesMain } from "./ChatBubblesMain/ChatBubblesMain";
import { HeroiconsArrowLeftEndOnRectang } from "./HeroiconsArrowLeftEndOnRectang";
import { HeroiconsHeartSolidIcon } from "./HeroiconsHeartSolidIcon";
import { HeroiconsHeartSolidIcon2 } from "./HeroiconsHeartSolidIcon2";
import { HeroiconsHeartSolidIcon3 } from "./HeroiconsHeartSolidIcon3";
import { HeroiconsHeartSolidIcon4 } from "./HeroiconsHeartSolidIcon4";
import { HeroiconsPauseCircleIcon } from "./HeroiconsPauseCircleIcon";
import { HeroiconsVideoCameraSlashIcon } from "./HeroiconsVideoCameraSlashIcon";
import classes from "./MacBookPro1419.module.css";

interface Props {
  className?: string;
}
/* @figmaId 325:380 */
export const MacBookPro1419: FC<Props> = memo(function MacBookPro1419(
  props = {}
) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.blobYellow1}>
        <BlobYellow1Icon className={classes.icon} />
      </div>
      <div className={classes.blobYellowSmall1}>
        <BlobYellowSmall1Icon className={classes.icon2} />
      </div>
      <div className={classes.blobBig}>
        <BlobBigIcon className={classes.icon3} />
      </div>
      <div className={classes.blobBlue1}>
        <BlobBlue1Icon className={classes.icon4} />
      </div>
      <div className={classes.blobBlue2}>
        <BlobBlue2Icon className={classes.icon5} />
      </div>
      <div className={classes.blobYellow2}>
        <BlobYellow2Icon className={classes.icon6} />
      </div>
      <div className={classes.phoneBackdrop1}></div>
      <div className={classes.phoneBackdrop2}></div>
      <div className={classes.livestreamAIRealtimeFeedbackCo}>
        <div className={classes.textBlock}>Livestream AI</div>
        <div className={classes.textBlock2}>Realtime feedback</div>
        <div className={classes.textBlock3}>Coaching</div>
        <div className={classes.textBlock4}>Generative lessons</div>
        <div className={classes.textBlock5}>
          <p></p>
        </div>
        <div className={classes.textBlock6}>
          <p></p>
        </div>
        <div className={classes.textBlock7}>
          <p></p>
        </div>
        <div className={classes.textBlock8}>
          <p></p>
        </div>
      </div>
      <div className={classes.practiceProductPitches}>
        <div className={classes.textBlock9}>Practice</div>
        <div className={classes.textBlock10}>Product</div>
        <div className={classes.textBlock11}>Pitches!</div>
      </div>
      <div className={classes.grungeOverlay}></div>
      <div className={classes.pHONEOVERLAYMOCKUP5}></div>
      <ChatBubblesMain
        className={classes.chatBubblesMain}
        classes={{
          _181: classes._181,
          _1351: classes._1351,
          _711: classes._711,
        }}
      />
      <div className={classes.heroiconsPauseCircle}>
        <HeroiconsPauseCircleIcon className={classes.icon7} />
      </div>
      <div className={classes.heroiconsArrowLeftEndOnRectang}>
        <HeroiconsArrowLeftEndOnRectang className={classes.icon8} />
      </div>
      <div className={classes.heroiconsHeartSolid}>
        <HeroiconsHeartSolidIcon className={classes.icon9} />
      </div>
      <div className={classes.heroiconsHeartSolid2}>
        <HeroiconsHeartSolidIcon2 className={classes.icon10} />
      </div>
      <div className={classes.heroiconsHeartSolid3}>
        <HeroiconsHeartSolidIcon3 className={classes.icon11} />
      </div>
      <div className={classes.heroiconsHeartSolid4}>
        <HeroiconsHeartSolidIcon4 className={classes.icon12} />
      </div>
      <div className={classes.heroiconsVideoCameraSlash}>
        <HeroiconsVideoCameraSlashIcon className={classes.icon13} />
      </div>
      <div className={classes.cOMINGSOONText}>COMING SOON</div>
      <div className={classes.signupForm}>
        <div className={classes.colourBackground}>
          <div className={classes.formComponents}>
            <div className={classes.group40}>
              <div className={classes.makeBigMoves}>Make Big Moves</div>
              <div className={classes.gainYourAdvantageLearnToSellJo}>
                <div className={classes.textBlock12}>
                  Gain your advantage, learn to sell.
                </div>
                <div className={classes.textBlock13}>
                  Join the waitlist for a chance at first access to the first
                  live commerce trainer.{" "}
                </div>
                <div className={classes.textBlock14}>
                  <p></p>
                </div>
              </div>
            </div>

            <div className={classes.group41}>
              <div className={classes.rectangle37}></div>
              <div className={classes.nameHere}>Name here... </div>
              <div className={classes.rectangle372}></div>
              <div className={classes.emailHere}>Email here... </div>
              <div className={classes.rectangle38}></div>
              <div className={classes.join}>Join</div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.getInTouchMyShtRocks}>
        Get in touch | my@sht.rocks
      </div>
      <div className={classes.sHTLogoTilted1}></div>
    </div>
  );
});
