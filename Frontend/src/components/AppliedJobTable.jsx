import React from 'react'
import { Badge } from './ui/badge'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { useSelector } from 'react-redux'

function AppliedJobTable() {
    const { allAppliedJobs } = useSelector(store => store.job)
    return (
        <div>
            <Table>
                <TableCaption>
                </TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Applied On</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead className="text-right">Status</TableHead>

                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        allAppliedJobs && allAppliedJobs.length > 0 ? (
                            allAppliedJobs.map((appliedJob) => (
                                <TableRow key={appliedJob?._id}>
                                    <TableCell>{appliedJob?.createdAt?.split("T"[0])}</TableCell>
                                    <TableCell>{appliedJob?.job?.title}</TableCell>
                                    <TableCell>{appliedJob?.job?.company?.name}</TableCell>
                                    <TableCell className="text-right"><Badge className={`${appliedJob?.status == 'rejected' ? 'bg-red-400' : appliedJob.status == 'pending' ? 'bg-gray-400' : 'bg-green-500'}`} >  {appliedJob.status.toUpperCase()}</Badge></TableCell>




                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={4} className="text-center">You haven't applied yet</TableCell>
                            </TableRow>
                        )

                    }
                </TableBody>
            </Table>
        </div >


    )
}

export default AppliedJobTable
