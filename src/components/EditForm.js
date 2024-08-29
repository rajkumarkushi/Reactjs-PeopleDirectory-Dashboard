
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  name: z.string().nonempty('Name is required'),
  email: z.string().email('Invalid email format'),
  role: z.string().nonempty('Role is required'),
  team: z.string().nonempty('Team is required'),
});

const EditForm = ({ person, onSave, onCancel }) => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: person,
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log('Submitted Data:', data); // Log the form data
    onSave({ ...person, ...data });
  };

  return (
    <div className="modal show d-block" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Person</h5>
            <button type="button" className="btn-close" onClick={onCancel}></button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="modal-body">
              <div className="form-group">
                <label>Name</label>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => <input {...field} className="form-control" />}
                />
                {errors.name && <p className="text-danger">{errors.name.message}</p>}
              </div>
              <div className="form-group">
                <label>Email</label>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => <input {...field} className="form-control" />}
                />
                {errors.email && <p className="text-danger">{errors.email.message}</p>}
              </div>
              <div className="form-group">
                <label>Role</label>
                <Controller
                  name="role"
                  control={control}
                  render={({ field }) => <input {...field} className="form-control" />}
                />
                {errors.role && <p className="text-danger">{errors.role.message}</p>}
              </div>
              <div className="form-group">
                <label>Team</label>
                <Controller
                  name="team"
                  control={control}
                  render={({ field }) => <input {...field} className="form-control" />}
                />
                {errors.team && <p className="text-danger">{errors.team.message}</p>}
              </div>
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary">Save</button>
              <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditForm;