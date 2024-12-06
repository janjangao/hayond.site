import { Head } from "$fresh/runtime.ts";
// import { useSignal } from "@preact/signals";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="origin/styles.css" />
        <link rel="icon" href="origin/logo.png" />
        <meta name="LDR" content="origin/LDR_LLL1_0.png" />
      </Head>

      <canvas></canvas>
      <div class="absolute bottom-0 w-full text-center">
        <a
          class="no-underline text-xs text-[#bbb] mix-blend-difference"
          href="https://beian.miit.gov.cn/shouye.html"
          target="_blank"
        >
          浙ICP备19019742号
        </a>
      </div>
      <script type="text/javascript" src="origin/dat.gui.min.js"></script>
      <script type="text/javascript" src="origin/script.js"></script>
    </>
  );
}
