import {
    ArrowDownIcon,
    ArrowRightIcon,
    ArrowUpIcon,
    BabyIcon,
    BriefcaseMedicalIcon,
    CheckCheckIcon,
    CrossIcon,
    HeartPulseIcon,
    HourglassIcon,
    Loader2Icon,
    MailQuestionIcon,
    NotebookPenIcon,
    SkipForwardIcon,
    ThermometerIcon,
    ThermometerSunIcon,
    TreePalmIcon,
  } from "lucide-react"

  export const statuses = [
    {
      value: "billed",
      label: "Billed",
      icon: CheckCheckIcon,
    },
    {
      value: "reject",
      label: "Reject",
      icon: CrossIcon,
    },
    {
      value: "query",
      label: "Query",
      icon: MailQuestionIcon,
    },
    {
      value: "skipped",
      label: "Skipped",
      icon: SkipForwardIcon,
    },
    {
      value: "in progress",
      label: "In Progress",
      icon: HourglassIcon,
    },
    {
      value: "pending",
      label: "Pending",
      icon: Loader2Icon,
    },
  ]