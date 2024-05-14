import { ProfileForm } from "@/components/profile-form";

export default function Home() {
  return (
    //form in shadcn
    <div className="flex flex-col items-center justify-center p-10">
      <ProfileForm />
    </div>
  );
}
