import { Grid2 } from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";

type Props = {
    activities: Activity[],
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    selectedActivity?: Activity;
    openForm: (id: string) => void;
    closeForm: () => void;
    editMode: boolean;
    submitForm: (activity: Activity) => void;
    deleteActivity: (id: string) => void;
}

export default function ActivityDashboard({ activities, selectActivity, cancelSelectActivity, selectedActivity
    , openForm,
    closeForm,
    editMode,
    submitForm,
    deleteActivity
}: Props) {
    return (
        <Grid2 container spacing={3}>
            <Grid2 size={7}>
                <ActivityList
                    deleteActivity={deleteActivity}
                    activities={activities} selectActivity={selectActivity} />
            </Grid2>
            <Grid2 size={5}>
                {selectedActivity && !editMode && <ActivityDetails activity={selectedActivity}
                    cancelSelectActivity={cancelSelectActivity} openForm={openForm} />}
                {
                    editMode &&
                    <ActivityForm
                        submitForm={submitForm}
                        closeForm={closeForm} activity={selectedActivity} />
                }
            </Grid2>
        </Grid2>
    )
}