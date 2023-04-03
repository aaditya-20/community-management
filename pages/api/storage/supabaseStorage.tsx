import { v4 as uuidv4 } from "uuid";
import { supabase } from "@/pages/config/supabaseClient";
import { useState } from "react";

const supabaseStorage = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!file) {
      return;
    }

    const filename = `${uuidv4()}-${file.name}`;

    const { data, error } = await supabase.storage
      .from("temp")
      .upload(filename, file, {
        cacheControl: "3600",
        upsert: false,
      });


  };

  const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" name="image" onChange={handleFileSelected} />
      <button type="submit">Upload file</button>
    </form>
  );
};

export default supabaseStorage;
