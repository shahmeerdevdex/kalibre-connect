import React, { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MOU {
  id: string;
  title: string;
  description: string;
  image_url: string | null;
  video_url: string | null;
  document_url: string | null;
  is_active: boolean;
}

const MOUSection = () => {
  const [mous, setMous] = useState<MOU[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchActiveMOUs();
  }, []);

  const fetchActiveMOUs = async () => {
    try {
      const { data, error } = await supabase
        .from("mous")
        .select("*")
        .eq("is_active", true)
        .order("created_at", { ascending: false });
        
      if (error) throw error;
      setMous(data || []);
    } catch (error) {
      console.error("Error fetching MOUs:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse">Loading MOUs...</div>
          </div>
        </div>
      </section>
    );
  }

  if (mous.length === 0) {
    return null; // Don't show the section if no MOUs are available
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Memorandums of Understanding
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our partnerships and collaborations that enhance your educational experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mous.map((mou) => (
            <div
              key={mou.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {mou.image_url && (
                <div className="aspect-video">
                  <img
                    src={mou.image_url}
                    alt={mou.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {mou.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {mou.description}
                </p>

                <div className="space-y-3">
                  {mou.video_url && (
                    <div className="aspect-video">
                      <video
                        controls
                        className="w-full h-full rounded-lg"
                        poster={mou.image_url || undefined}
                      >
                        <source src={mou.video_url} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  )}

                  {mou.document_url && (
                    <div className="flex justify-center">
                      <Button
                        asChild
                        variant="outline"
                        className="w-full"
                      >
                        <a
                          href={mou.document_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <FileText className="h-4 w-4" />
                          View Document
                          <Download className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MOUSection;