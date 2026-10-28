"use client";

import { useState } from "react";
import { reviews } from "@/data/reviews";
import { Icon } from "@/app/_components/common/Icon";

export function Reviews() {
  const published = reviews.filter((review) => review.approvedForReuse);
  const [activeIndex, setActiveIndex] = useState(0);
  const index = published.length ? activeIndex % published.length : 0;
  const review = published[index];

  return (
    <section className="section review-section [padding:140px_0] bg-paper [@media(max-width:900px)]:[padding:95px_0]" id="reviews" aria-labelledby="review-title">
      <div className="container [max-width:1360px] [width:calc(100%_-_96px)] [margin-inline:auto] review-layout grid [grid-template-columns:1fr_1fr] items-center [gap:10%] [@media(max-width:1180px)]:[width:calc(100%_-_64px)] [@media(max-width:900px)]:[width:calc(100%_-_48px)] [@media(max-width:900px)]:[grid-template-columns:1fr] [@media(max-width:900px)]:gap-[50px] [@media(max-width:600px)]:[width:calc(100%_-_36px)]">
        <div className={"review-intro [&_h2]:text-[clamp(44px,5.4vw,80px)] [&_h2]:font-[760] [&_h2]:[line-height:1.14] [&_h2]:[letter-spacing:-.065em] [&_h2]:[margin:25px_0_24px] [&_h2_em]:text-[#9a9da4] [&_h2_em]:[font-style:normal] [&_h2]:mb-[25px] [&>p]:text-base [&>p]:text-[#7b7e84] [&>p]:max-w-[425px] [@media(max-width:600px)]:[&_h2]:text-[clamp(41px,10.5vw,62px)] [@media(max-width:600px)]:[&_h2]:[margin:20px_0]"}><span className="eyebrow"><span className="eyebrow-line"/> REAL STORIES</span><h2 id="review-title">고객의 한마디가<br/><em>우리의 기준입니다.</em></h2><p>직접 이용한 고객의 경험을 소중히 듣고, 더 편안한 차량 이용을 위해 노력합니다.</p><div className="review-decor [font-family:Georgia,serif] [font-size:200px] [line-height:.7] [color:#e5e5e8] [transform:translate(-10px,25px)] [height:105px] [@media(max-width:900px)]:hidden">“</div></div>
        <div className={"review-card rounded-[20px] bg-silver min-h-[350px] p-11 flex flex-col justify-center [&_blockquote]:text-[clamp(23px,2vw,31px)] [&_blockquote]:[letter-spacing:-.05em] [&_blockquote]:font-bold [&_blockquote]:[line-height:1.55] [&_blockquote]:[margin:36px_0] [@media(max-width:600px)]:p-[27px] [@media(max-width:600px)]:min-h-[280px]"}>
          {review ? <>
            <div className="review-card__top flex justify-between items-center text-xs font-[730] text-[#7d7f85]"><span>네이버 플레이스 실제 후기</span><Icon name="quote" size={30}/></div>
            <blockquote>{review.text}</blockquote>
            <div className={"review-card__footer flex justify-between [border-top:1px_solid_#dedee1] pt-[21px] [&_div]:flex [&_div]:flex-col [&_div]:gap-[5px] [&_strong]:text-[13px] [&_small]:text-[11px] [&_small]:text-[#898c93]"}><div><strong>{review.authorDisplay}</strong><small>{review.writtenAt || "네이버 플레이스"}</small></div>{review.sourceUrl ? <a href={review.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline-link inline-flex [gap:8px] items-center [font-size:12px] font-bold">원문 보기 <Icon name="arrow" size={15}/></a> : null}</div>
            {published.length > 1 ? <div className={"review-controls flex justify-between text-xs mt-[25px] [&_div]:flex [&_div]:gap-2 [&_button]:[border-radius:50%] [&_button]:w-[36px] [&_button]:h-[36px] [&_button]:bg-white [&_button]:[border:1px_solid_#d3d4d7]"}><span>{String(index + 1).padStart(2, "0")} / {String(published.length).padStart(2, "0")}</span><div><button type="button" onClick={() => setActiveIndex((v) => (v - 1 + published.length) % published.length)} aria-label="이전 후기">←</button><button type="button" onClick={() => setActiveIndex((v) => (v + 1) % published.length)} aria-label="다음 후기">→</button></div></div> : null}
          </> : <div className={"review-placeholder [&_svg]:[color:var(--gold-dark)] [&_h3]:text-[34px] [&_h3]:[line-height:1.25] [&_h3]:[margin:25px_0_12px] [&_p]:text-[#7a7c84] [&_p]:text-sm [&>span]:block [&>span]:mt-[30px] [&>span]:text-[10px] [&>span]:font-[750] [&>span]:[letter-spacing:.15em] [&>span]:text-[#a3a5ab] [@media(max-width:600px)]:[&_h3]:text-[29px]"}><Icon name="quote" size={42}/><h3>실제 고객 후기를<br/>준비하고 있습니다.</h3><p>네이버 플레이스의 실제 후기 중 재게시가 가능한 내용을 확인해 이곳에 소개할 예정입니다.</p><span>VERIFIED REVIEWS COMING SOON</span></div>}
        </div>
      </div>
    </section>
  );
}
