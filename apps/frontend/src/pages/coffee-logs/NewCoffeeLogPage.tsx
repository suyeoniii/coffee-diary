import { ArrowLeft, Plus, Star, X } from "lucide-react";
import { formatDateString } from "../../lib/date";
import { useState } from "react";
import { CreateBrewLogPayload } from "../../types/log";
import { createCoffeeLog } from "../../app/api/logs";

type StepForm = {
  id: number;
  stepNumber: number;
  amount: string;
  time: string;
};

export function NewCoffeeLogPage() {
  const [form, setForm] = useState({
    title: "",
    brewedAt: new Date().toISOString().slice(0, 10), // YYYY-MM-DD
    brewMethod: "POUR_OVER",
    dripper: "",
    grindSize: "",
    beanAmount: "",
    waterAmount: "",
    waterTemp: "",
    pourSteps: [{ amount: "", time: "" }],
    note: "",
    rating: 0,
  });

  const canSave = form.title.trim().length > 0;

  const handleSave = async () => {
    if (!canSave) return;

    const payload: CreateBrewLogPayload = {
      brewedAt: new Date(form.brewedAt).toISOString(),
      title: form.title.trim(),
      note: form.note.trim() || undefined,
      rating: form.rating,
      grindSize: form.grindSize.trim() || undefined,
      coffeeAmount: form.beanAmount.trim()
        ? Number(form.beanAmount)
        : undefined,
      waterAmount: form.waterAmount.trim()
        ? Number(form.waterAmount)
        : undefined,
      waterTemp: form.waterTemp.trim() ? Number(form.waterTemp) : undefined,
      dripper: form.dripper.trim() || undefined,
      method: form.brewMethod as any,
      steps: [],
    };

    try {
      const result = await createCoffeeLog(payload);
      console.log("Coffee log created:", result);
      alert("Coffee log created successfully!");
      // Redirect to the new log's page or show success message
    } catch (error) {
      console.error("Error creating coffee log:", error);
      alert("Failed to create coffee log. Please try again.");
    }
  };

  const [steps, setSteps] = useState<StepForm[]>([
    { id: 1, stepNumber: 1, amount: "", time: "" },
  ]);

  const addStep = () => {
    setSteps((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        stepNumber: prev.length + 1,
        amount: "",
        time: "",
      },
    ]);
  };

  const removeStep = (id: number) => {
    setSteps((prev) => prev.filter((step) => step.id !== id));
  };

  const updateStep = (id: number, field: "amount" | "time", value: string) => {
    setSteps((prev) =>
      prev.map((step) => (step.id === id ? { ...step, [field]: value } : step)),
    );
  };

  return (
    <div>
      <div className="position:sticky top-0 mb-6 flex items-center justify-between">
        <button
          className="flex items-center gap-2 text-sm font-semibold text-[var(--muted-foreground)]"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          <span>Back</span>
        </button>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full bg-[#5b3922] px-4 py-3 text-sm font-semibold text-white hover:bg-[#4a2d1a] focus:outline-none disabled:bg-[#eeede9] disabled:text-[#737373]"
          onClick={handleSave}
          disabled={!canSave}
        >
          <span>Save Log</span>
        </button>
      </div>
      <h1 className="mb-2 text-2xl font-bold">New Coffee Log</h1>
      <span className="text-[var(--muted-foreground)]">
        {formatDateString(new Date().toISOString())}
      </span>
      {/* Form fields */}
      <label className="mt-4 block text-sm font-medium text-gray-700">
        Info
      </label>
      <input
        type="title"
        placeholder="Title"
        className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-3 focus:ring-2 focus:ring-[#5b3922] focus:outline-none"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <input
        type="date"
        className="mt-4 w-full rounded-md border border-gray-300 bg-white px-3 py-3 text-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-[#5b3922] focus:outline-none"
        value={form.brewedAt}
        onChange={(e) => setForm({ ...form, brewedAt: e.target.value })}
      />
      <select
        className="mt-4 w-full rounded-md border border-gray-300 bg-white px-3 py-3 text-gray-400 focus:ring-2 focus:ring-[#5b3922] focus:outline-none"
        onChange={(e) => setForm({ ...form, brewMethod: e.target.value })}
        value={form.brewMethod}
      >
        <option value="" className="text-gray-400">
          Brew Method
        </option>
        <option value="POUR_OVER">Pour over</option>
        <option value="OTHER">Other</option>
      </select>
      {/* brew parameter */}
      <label className="mt-4 block text-sm font-medium text-gray-700">
        Brew Parameters
      </label>
      <select
        className="mt-4 w-full rounded-md border border-gray-300 bg-white px-3 py-3 text-gray-400 focus:ring-2 focus:ring-[#5b3922] focus:outline-none"
        onChange={(e) => setForm({ ...form, dripper: e.target.value })}
        value={form.dripper}
      >
        <option value="" className="text-gray-400">
          Dripper Type
        </option>
        <option value="HARIO_V60">Hario V60</option>
        <option value="ORIGAMI">Origami</option>
        <option value="KALITA">Kalita</option>
        <option value="OTHER">Other</option>
      </select>
      <div className="mt-2 flex gap-2">
        <input
          type="text"
          placeholder="Grind Size"
          className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-2 focus:ring-2 focus:ring-[#5b3922] focus:outline-none"
          value={form.grindSize}
          onChange={(e) => setForm({ ...form, grindSize: e.target.value })}
        />
        <span className="flex items-center gap-1">
          <input
            type="number"
            placeholder="Bean Amount (g)"
            className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-2 focus:ring-2 focus:ring-[#5b3922] focus:outline-none"
            value={form.beanAmount}
            onChange={(e) => setForm({ ...form, beanAmount: e.target.value })}
          />
          <span className="text-[var(--muted-foreground)]">g</span>
        </span>
      </div>
      <div className="mt-2 flex gap-2">
        <input
          type="number"
          placeholder="Water Amount"
          className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-3 focus:ring-2 focus:ring-[#5b3922] focus:outline-none"
          value={form.waterAmount}
          onChange={(e) => setForm({ ...form, waterAmount: e.target.value })}
        />
        <span className="flex items-center gap-1">
          <input
            type="number"
            placeholder="Water Temp (°C)"
            className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-3 focus:ring-2 focus:ring-[#5b3922] focus:outline-none"
            value={form.waterTemp}
            onChange={(e) => setForm({ ...form, waterTemp: e.target.value })}
          />
          <span className="text-[var(--muted-foreground)]">°C</span>
        </span>
      </div>
      {/* Steps */}
      <label className="mt-4 block text-sm font-medium text-gray-700">
        Pour Steps
      </label>
      {steps.map((step) => (
        <div className="mt-1 flex gap-2">
          <input
            type="text"
            placeholder="Amount (g)"
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-3 focus:ring-2 focus:ring-[#5b3922] focus:outline-none"
          />
          <input
            type="text"
            placeholder="Time (sec)"
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-3 focus:ring-2 focus:ring-[#5b3922] focus:outline-none"
          />
          <button
            type="button"
            className="rounded-sm p-2 text-[var(--muted-foreground)] hover:bg-[var(--border)] focus:outline-none"
            onClick={() => removeStep(step.id)}
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ))}
      <button
        type="button"
        className="mt-2 inline-flex items-center gap-2 rounded-sm px-2 py-2 text-sm text-[var(--muted-foreground)] hover:bg-[var(--border)] focus:outline-none"
        onClick={addStep}
      >
        <Plus className="h-4 w-4" />
        <span>Add Step</span>
      </button>
      {/* memo */}
      <label className="mt-4 block text-sm font-medium text-gray-700">
        Memo
      </label>
      <textarea
        placeholder="Notes"
        className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-3 focus:ring-2 focus:ring-[#5b3922] focus:outline-none"
        rows={4}
        value={form.note}
        onChange={(e) => setForm({ ...form, note: e.target.value })}
      />
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">
          Rating
        </label>
        <div className="mt-1 flex items-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              className="text-gray-300 hover:text-yellow-400 focus:outline-none"
            >
              <Star className="h-6 w-6 fill-current" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
