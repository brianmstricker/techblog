"use client";
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import CardTags from "./CardTags";
import UserButtons from "./UserButtons";
import ModalNavButtons from "./ModalNavButtons";

const CardModal = () => {
 const contentRef = useRef<HTMLDivElement>(null);
 return (
  <>
   <Dialog>
    <DialogTrigger asChild>
     <div className="w-full h-full absolute cursor-pointer"></div>
    </DialogTrigger>
    <DialogContent
     onOpenAutoFocus={(e: any) => {
      e.preventDefault();
      contentRef.current?.focus();
     }}
     className="w-full h-full sm:h-[90%] sm:max-w-[500px] md:max-w-[650px] lg:max-w-[900px]"
    >
     <ModalNavButtons />
     <div className="absolute -left-14 rounded-md pb-2 top-[40%] -translate-y-1/2 bg-gradient-to-r from-background from-90% to-transparent opacity-60 hover:opacity-100 focus-within:opacity-100 transition-[opacity] duration-200">
      <UserButtons col className="gap-10" />
     </div>
     <div className="overflow-y-scroll max-h-[96%] mt-8 pr-2 scrollbar">
      <div ref={contentRef} tabIndex={0} className="focus:outline-none">
       <h2 className="text-3xl">
        How to Build a Full-Stack Kanban Task Management App With TypeScript, Next.js, Redux-toolkit, and Firebase
       </h2>
       <div className="mt-2 text-muted-foreground flex flex-col">
        <span>By: Brian Stricker Michael the Fourth King Julian</span>
        <span className="shrink-0 font-medium">Mar 31, 2024</span>
        <CardTags className="text-sm" />
       </div>
       <div className="mt-6 prose prose-lg text-foreground">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos error fugiat unde aperiam sint sunt quibusdam sit consequuntur optio
        aspernatur ipsam magni praesentium accusamus sequi cumque exercitationem, alias adipisci? Ipsum enim inventore, ut sequi ex quaerat
        repellat exercitationem voluptas iure a, voluptatibus, odio ea error ipsa illo sapiente alias eius reiciendis maxime autem tempora
        cumque deleniti nemo? Eos, provident! Nostrum illum cupiditate, officiis minima neque sunt quibusdam dolore quos repellat cumque
        molestias, impedit illo corporis odio placeat ea ipsam asperiores eaque reiciendis accusamus ipsa quia molestiae animi! Libero
        temporibus expedita pariatur at earum consequatur quam, ducimus, odit minus fugit esse impedit deleniti animi porro ab quas eligendi
        deserunt. Tempora fuga quidem odio veniam nihil, iste est autem vitae eveniet ut nemo amet quae in asperiores, error impedit
        distinctio molestiae itaque expedita voluptates deserunt, dicta similique reiciendis perferendis? Necessitatibus exercitationem iste
        deserunt modi. Deserunt aspernatur dignissimos iure non modi laborum harum fugit omnis voluptatum, dolorum ut dolores, debitis
        corporis officia veniam laudantium minima reiciendis totam ducimus rerum necessitatibus deleniti molestias. Sit omnis aspernatur
        quis nihil maiores tempora, porro voluptas obcaecati iste ducimus mollitia repellat reprehenderit, esse, facilis aut magnam
        assumenda sint nisi? Ex accusantium eaque labore reprehenderit qui cum. Itaque rerum, enim asperiores laboriosam velit corrupti
        cumque est, laborum nemo nobis excepturi eaque quis qui aliquam delectus similique ex, iste nesciunt fugit provident deleniti
        repellat repellendus! Consequuntur ducimus nihil porro repellat doloremque excepturi maiores voluptatum. Voluptatum laudantium ex
        suscipit quis non, quam maiores ratione error modi pariatur corrupti laborum explicabo odio, perspiciatis numquam quo atque
        cupiditate fugit. Ea quae dolorem qui ducimus, enim, accusamus harum quas culpa ab dolore reiciendis! Minima quae ab minus
        molestiae, consequatur reiciendis cumque quam, laboriosam eum repellendus suscipit architecto incidunt. Deleniti nam vitae quam
        labore iste inventore rem ad exercitationem, provident qui atque adipisci delectus harum nobis excepturi sapiente aspernatur nihil
        quo deserunt quia odio numquam? Minima omnis animi nostrum corporis optio impedit! Laudantium voluptates repellendus rem sit?
        Voluptatem illo accusamus numquam aliquam. Odit dicta quo mollitia corrupti quaerat ipsam corporis. Repudiandae, distinctio? At
        neque asperiores mollitia expedita aperiam facere doloribus sit! Ex saepe ipsam deleniti recusandae eveniet laboriosam dolorum
        commodi incidunt amet eligendi, tempore odio, dolor tenetur fugit ab at fugiat perferendis. Non, sapiente error nesciunt quo
        accusantium aut natus iure nemo velit ullam porro unde ratione saepe modi qui eaque veniam itaque et iste adipisci tenetur quae
        numquam ab? Pariatur, qui temporibus, nisi dolore numquam sed maxime soluta repudiandae possimus eius deleniti amet blanditiis
        dolorem voluptatibus obcaecati, perspiciatis consequatur veniam sequi cumque facilis voluptas? Quam quas eum ea reiciendis iure
        tenetur, quisquam ut dolores rem vero consequuntur ad nemo veniam vitae nihil deleniti inventore corporis excepturi voluptatum
        distinctio ducimus. Dignissimos quas maiores commodi consequuntur, eligendi officia eveniet adipisci cupiditate ipsum porro hic,
        inventore voluptatem aut veritatis aliquam exercitationem repellat error non voluptatibus. Voluptatem similique culpa consequuntur
        veniam officia magni, fugit doloremque corporis animi quibusdam. Voluptas autem et deleniti tempore quidem. Reiciendis, distinctio
        minima exercitationem deleniti aspernatur, unde eaque quisquam iusto ut quia, corporis accusamus.
       </div>
      </div>
     </div>
    </DialogContent>
   </Dialog>
  </>
 );
};
export default CardModal;
